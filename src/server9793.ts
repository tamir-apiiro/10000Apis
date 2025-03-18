
const express = require('express')
import {handler9793} from "./handler9793";
const app = express()
app.get('/9793', handler9793)
app.listen(3000, () => {})
        