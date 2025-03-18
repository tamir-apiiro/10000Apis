
const express = require('express')
import {handler3107} from "./handler3107";
const app = express()
app.get('/3107', handler3107)
app.listen(3000, () => {})
        