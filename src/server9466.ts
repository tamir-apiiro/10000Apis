
const express = require('express')
import {handler9466} from "./handler9466";
const app = express()
app.get('/9466', handler9466)
app.listen(3000, () => {})
        