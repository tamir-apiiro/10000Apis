
const express = require('express')
import {handler6648} from "./handler6648";
const app = express()
app.get('/6648', handler6648)
app.listen(3000, () => {})
        