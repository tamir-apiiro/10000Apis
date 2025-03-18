
const express = require('express')
import {handler9771} from "./handler9771";
const app = express()
app.get('/9771', handler9771)
app.listen(3000, () => {})
        