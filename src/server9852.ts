
const express = require('express')
import {handler9852} from "./handler9852";
const app = express()
app.get('/9852', handler9852)
app.listen(3000, () => {})
        