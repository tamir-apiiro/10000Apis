
const express = require('express')
import {handler9327} from "./handler9327";
const app = express()
app.get('/9327', handler9327)
app.listen(3000, () => {})
        