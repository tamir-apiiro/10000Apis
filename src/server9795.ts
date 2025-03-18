
const express = require('express')
import {handler9795} from "./handler9795";
const app = express()
app.get('/9795', handler9795)
app.listen(3000, () => {})
        