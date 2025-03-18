
const express = require('express')
import {handler9568} from "./handler9568";
const app = express()
app.get('/9568', handler9568)
app.listen(3000, () => {})
        