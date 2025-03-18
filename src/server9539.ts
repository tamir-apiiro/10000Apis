
const express = require('express')
import {handler9539} from "./handler9539";
const app = express()
app.get('/9539', handler9539)
app.listen(3000, () => {})
        