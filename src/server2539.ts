
const express = require('express')
import {handler2539} from "./handler2539";
const app = express()
app.get('/2539', handler2539)
app.listen(3000, () => {})
        