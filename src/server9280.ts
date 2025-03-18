
const express = require('express')
import {handler9280} from "./handler9280";
const app = express()
app.get('/9280', handler9280)
app.listen(3000, () => {})
        