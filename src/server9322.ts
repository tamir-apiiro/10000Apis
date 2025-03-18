
const express = require('express')
import {handler9322} from "./handler9322";
const app = express()
app.get('/9322', handler9322)
app.listen(3000, () => {})
        