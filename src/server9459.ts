
const express = require('express')
import {handler9459} from "./handler9459";
const app = express()
app.get('/9459', handler9459)
app.listen(3000, () => {})
        