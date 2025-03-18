
const express = require('express')
import {handler3971} from "./handler3971";
const app = express()
app.get('/3971', handler3971)
app.listen(3000, () => {})
        