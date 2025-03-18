
const express = require('express')
import {handler6048} from "./handler6048";
const app = express()
app.get('/6048', handler6048)
app.listen(3000, () => {})
        