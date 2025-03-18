
const express = require('express')
import {handler6995} from "./handler6995";
const app = express()
app.get('/6995', handler6995)
app.listen(3000, () => {})
        