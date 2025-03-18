
const express = require('express')
import {handler9853} from "./handler9853";
const app = express()
app.get('/9853', handler9853)
app.listen(3000, () => {})
        