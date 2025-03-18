
const express = require('express')
import {handler9859} from "./handler9859";
const app = express()
app.get('/9859', handler9859)
app.listen(3000, () => {})
        