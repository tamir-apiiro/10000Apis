
const express = require('express')
import {handler9977} from "./handler9977";
const app = express()
app.get('/9977', handler9977)
app.listen(3000, () => {})
        