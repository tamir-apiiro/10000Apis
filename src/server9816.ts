
const express = require('express')
import {handler9816} from "./handler9816";
const app = express()
app.get('/9816', handler9816)
app.listen(3000, () => {})
        