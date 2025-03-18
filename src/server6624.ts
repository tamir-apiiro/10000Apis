
const express = require('express')
import {handler6624} from "./handler6624";
const app = express()
app.get('/6624', handler6624)
app.listen(3000, () => {})
        