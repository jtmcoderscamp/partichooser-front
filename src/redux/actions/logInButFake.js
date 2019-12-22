export const LOG_IN_BUT_FAKE = "LOG_IN_BUT_FAKE";

export default function(user) {
  return {
    type: LOG_IN_BUT_FAKE,
    payload: user
  };
}
