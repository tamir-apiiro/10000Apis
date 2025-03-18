
const express = require('express')
import {handler9975} from "./handler9975";
const app = express()
app.get('/9975', handler9975)
app.listen(3000, () => {})
        