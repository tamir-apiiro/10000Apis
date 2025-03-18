
const express = require('express')
import {handler3098} from "./handler3098";
const app = express()
app.get('/3098', handler3098)
app.listen(3000, () => {})
        