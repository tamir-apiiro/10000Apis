
const express = require('express')
import {handler9433} from "./handler9433";
const app = express()
app.get('/9433', handler9433)
app.listen(3000, () => {})
        