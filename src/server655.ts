
const express = require('express')
import {handler655} from "./handler655";
const app = express()
app.get('/655', handler655)
app.listen(3000, () => {})
        