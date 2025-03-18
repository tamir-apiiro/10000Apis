
const express = require('express')
import {handler9085} from "./handler9085";
const app = express()
app.get('/9085', handler9085)
app.listen(3000, () => {})
        