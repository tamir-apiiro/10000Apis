
const express = require('express')
import {handler2414} from "./handler2414";
const app = express()
app.get('/2414', handler2414)
app.listen(3000, () => {})
        