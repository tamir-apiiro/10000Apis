
const express = require('express')
import {handler9371} from "./handler9371";
const app = express()
app.get('/9371', handler9371)
app.listen(3000, () => {})
        