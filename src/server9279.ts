
const express = require('express')
import {handler9279} from "./handler9279";
const app = express()
app.get('/9279', handler9279)
app.listen(3000, () => {})
        