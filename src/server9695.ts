
const express = require('express')
import {handler9695} from "./handler9695";
const app = express()
app.get('/9695', handler9695)
app.listen(3000, () => {})
        