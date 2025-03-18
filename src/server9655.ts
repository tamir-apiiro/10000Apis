
const express = require('express')
import {handler9655} from "./handler9655";
const app = express()
app.get('/9655', handler9655)
app.listen(3000, () => {})
        