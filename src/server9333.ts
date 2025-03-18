
const express = require('express')
import {handler9333} from "./handler9333";
const app = express()
app.get('/9333', handler9333)
app.listen(3000, () => {})
        