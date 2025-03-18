
const express = require('express')
import {handler9866} from "./handler9866";
const app = express()
app.get('/9866', handler9866)
app.listen(3000, () => {})
        