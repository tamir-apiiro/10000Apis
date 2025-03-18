
const express = require('express')
import {handler9668} from "./handler9668";
const app = express()
app.get('/9668', handler9668)
app.listen(3000, () => {})
        