
const express = require('express')
import {handler9440} from "./handler9440";
const app = express()
app.get('/9440', handler9440)
app.listen(3000, () => {})
        