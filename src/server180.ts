
const express = require('express')
import {handler180} from "./handler180";
const app = express()
app.get('/180', handler180)
app.listen(3000, () => {})
        