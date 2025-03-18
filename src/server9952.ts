
const express = require('express')
import {handler9952} from "./handler9952";
const app = express()
app.get('/9952', handler9952)
app.listen(3000, () => {})
        