
const express = require('express')
import {handler539} from "./handler539";
const app = express()
app.get('/539', handler539)
app.listen(3000, () => {})
        