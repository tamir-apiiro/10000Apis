
const express = require('express')
import {handler6475} from "./handler6475";
const app = express()
app.get('/6475', handler6475)
app.listen(3000, () => {})
        