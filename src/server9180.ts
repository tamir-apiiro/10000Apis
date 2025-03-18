
const express = require('express')
import {handler9180} from "./handler9180";
const app = express()
app.get('/9180', handler9180)
app.listen(3000, () => {})
        