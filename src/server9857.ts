
const express = require('express')
import {handler9857} from "./handler9857";
const app = express()
app.get('/9857', handler9857)
app.listen(3000, () => {})
        