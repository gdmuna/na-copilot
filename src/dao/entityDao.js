import prisma from '@/utils/db';
const entityDao = {
    //获取面试实体列表
    getEntityList: async () => {
        const entities = await prisma.interview.findMany();
        return entities;
    },
    //获取面试实体信息
    getInterviewInfo: async (interviewId) => {
        const interview = await prisma.interview.findUnquie({
            where: { id: interviewId },
            select: {
                name: true,
                description: true
            }
        });
        if (!interview) {
            throw new Error(`Interview with id ${interviewId} does not exist`);
        }
        const rounds = await prisma.interview_round.findMany({
            where: { interview_id: interviewId },
            select: {
                id: true,
                name: true,
                description: true
            }
        });
        const roundsWithDetails = await Promise.all(
            rounds.map(async (round) => {
                const topics = await prisma.interview_topic.findMany({
                    where: { round_id: round.id },
                    select: {
                        topic: true,
                        name: true,
                        description: true
                    }
                });
                const topicsWithSessions = await Promise.all(
                    topics.map(async (topic) => {
                        const sessions = await prisma.interview_session.findMany({
                            where: {
                                topic: topic.topic,
                                round_id: round.id
                            },
                            select: {
                                session: true,
                                name: true,
                                description: true,
                                time: true,
                                place: true
                            }
                        });
                        const sessionsWithRatingRules = await Promise.all(
                            sessions.map(async (session) => {
                                const ratingRules = await prisma.interview_rater_rule.findMany({
                                    where: {
                                        round_id: round.id,
                                        topic: topic.topic,
                                        session: session.session
                                    },
                                    select: {
                                        rating_position: true,
                                        limiters: true
                                    }
                                });
                                return {
                                    sessionId: session.session,
                                    sessionName: session.name,
                                    sessionDescription: session.description,
                                    sessionTime: session.time,
                                    sessionPlace: session.place,
                                    raterRound: ratingRules.map((rule) => ({
                                        ratingPosition: rule.rating_position,
                                        limiters: rule.limiters
                                    }))
                                };
                            })
                        );
                        return {
                            topicId: topic.topic,
                            topicName: topic.name,
                            topicDescription: topic.description,
                            sessions: sessionsWithRatingRules
                        };
                    })
                );
                return {
                    roundId: round.id,
                    roundName: round.name,
                    roundDescription: round.description,
                    topics: topicsWithSessions
                };
            })
        );
        return {
            name: interview.name,
            description: interview.description,
            rounds: roundsWithDetails
        };
    },
    //创建面试实体
    createInterview: async ({ id, name, description }) => {
        const createinterview = await prisma.interview.create({
            data: {
                id,
                name,
                description
            }
        });
        return createinterview;
    },
    //修改面试实体
    modifyInterview: async ({ id, name, description }) => {
        const modifyinterview = await prisma.interview.update({
            where: { id },
            data: {
                name,
                description
            }
        });
        return modifyinterview;
    },
    //删除面试实体
    deleteInterview: async ({ id }) => {
        const deleteinterview = await prisma.interview.delete({
            where: { id }
        });
        return deleteinterview;
    },
    // 创建环节实体
    createRound: async ({ interviewId, id, name, description, type, sort }) => {
        const interviewExists = await prisma.interview.findUnique({
            where: {
                id: interviewId
            }
        });
        if (!interviewExists) {
            throw new Error(`Interview with id ${interviewId} does not exist`);
        }
        const createRound = await prisma.interview_round.create({
            data: {
                interview_id: interviewId,
                id,
                sort,
                name,
                description,
                type
            }
        });
        return createRound;
    },
    //创建节点实体
    createTopic: async ({ roundId, topic, name, description, type }) => {
        const existingTopic = await prisma.interview_topic.findUnique({
            where: {
                round_id_topic: {
                    round_id: roundId,
                    topic: topic
                }
            }
        });
        if (existingTopic) {
            return {
                code: 'EXISTING_RECORD',
                msg: 'roundId 和 topic 的组合已经存在。'
            };
        } else {
            const createdTopic = await prisma.interview_topic.create({
                data: {
                    round_id: roundId,
                    topic,
                    name,
                    description,
                    type
                }
            });
            return {
                code: 'SUCCESS',
                msg: '节点创建成功',
                data: createdTopic
            };
        }
    },
    //修改环节实体的信息
    modifyRound: async ({ interviewId, id, name, description, type, sort }) => {
        const existingRound = await prisma.interview_round.findMany({
            where: {
                id
            }
        });
        if (!existingRound) {
            throw new Error(`ID 为 ${id} 的 InterviewRound 不存在`);
        }
        const modifyRound = await prisma.interview_round.update({
            where: { id },
            data: {
                interview_id: interviewId,
                name,
                description,
                type,
                sort
            }
        });
        return modifyRound;
    },
    //修改节点实体的信息
    modifyTopic: async ({ roundId, topic, name, description, type }) => {
        const modifyTopic = await prisma.interview_topic.update({
            where: {
                round_id_topic: {
                    round_id: roundId,
                    topic: topic
                }
            },
            data: {
                name,
                description,
                type
            }
        });
        return modifyTopic;
    },
    //创建场次实体
    createSession: async ({ roundId, session, name, description, time, place, topic }) => {
        const roundExists = await prisma.interview_round.findUnique({
            where: { id: roundId }
        });

        const topicExists = await prisma.interview_topic.findUnique({
            where: { round_id_topic: { round_id: roundId, topic } }
        });

        if (!roundExists) {
            return { code: 1, msg: '无效的场次id' };
        }

        if (!topicExists) {
            return { code: 1, msg: '无效的节点' };
        }
        const createSession = await prisma.interview_session.create({
            data: {
                round_id: roundId,
                session,
                name,
                description,
                time,
                place,
                topic
            }
        });
        return createSession;
    },
    // 修改场次实体信息
    modifySession: async ({ roundId, session, name, description, time, place, topic }) => {
        const modifySession = await prisma.interview_session.update({
            where: {
                round_id_topic_session: {
                    round_id: roundId,
                    session,
                    topic
                }
            },
            data: {
                name,
                description,
                time,
                place
            }
        });
        return modifySession;
    },
    // 获取节点
    getTopic: async ({ interviewId, roundId }) => {
        const interview = await prisma.interview.findMany({
            where: {
                id: interviewId
            }
        });
        if (!interview) {
            return null;
        }
        const round = await prisma.interview_round.findMany({
            where: {
                id: roundId,
                interview_id: interviewId
            }
        });
        if (!round) {
            return null;
        }
        const result = await prisma.interview_topic.findMany({
            where: {
                round_id: roundId
            },
            select: {
                name: true,
                topic: true,
                description: true,
                type: true
            }
        });
        return result;
    },
    //获取轮次
    getRound: async ({ interviewId }) => {
        const rounds = await prisma.$queryRaw`
        SELECT sort, name, description, type
        FROM interview.interview_round
        WHERE interview_id = ${interviewId}
        ORDER BY sort ASC
    `;
        return rounds;
    },
    //获取场次
    getSession: async ({ topic, roundId }) => {
        const sessions = await prisma.$queryRaw`
            SELECT session, name, description, time, place
            FROM interview.interview_session
            WHERE topic = ${Number(topic)} AND round_id = ${roundId}
            ORDER BY time ASC
        `;
        return sessions;
    }
};
export default entityDao;
