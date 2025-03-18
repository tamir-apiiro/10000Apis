
const express = require('express')
import {handler9635} from "./handler9635";
const app = express()
app.get('/9635', handler9635)
app.listen(3000, () => {})
        