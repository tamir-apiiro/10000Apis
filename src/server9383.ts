
const express = require('express')
import {handler9383} from "./handler9383";
const app = express()
app.get('/9383', handler9383)
app.listen(3000, () => {})
        