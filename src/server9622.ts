
const express = require('express')
import {handler9622} from "./handler9622";
const app = express()
app.get('/9622', handler9622)
app.listen(3000, () => {})
        