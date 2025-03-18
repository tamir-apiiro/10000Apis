
const express = require('express')
import {handler3539} from "./handler3539";
const app = express()
app.get('/3539', handler3539)
app.listen(3000, () => {})
        