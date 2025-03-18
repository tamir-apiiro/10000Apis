
const express = require('express')
import {handler4805} from "./handler4805";
const app = express()
app.get('/4805', handler4805)
app.listen(3000, () => {})
        