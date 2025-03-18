
const express = require('express')
import {handler3743} from "./handler3743";
const app = express()
app.get('/3743', handler3743)
app.listen(3000, () => {})
        