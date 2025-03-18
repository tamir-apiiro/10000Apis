
const express = require('express')
import {handler7805} from "./handler7805";
const app = express()
app.get('/7805', handler7805)
app.listen(3000, () => {})
        