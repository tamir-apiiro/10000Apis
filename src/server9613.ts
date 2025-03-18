
const express = require('express')
import {handler9613} from "./handler9613";
const app = express()
app.get('/9613', handler9613)
app.listen(3000, () => {})
        