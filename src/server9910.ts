
const express = require('express')
import {handler9910} from "./handler9910";
const app = express()
app.get('/9910', handler9910)
app.listen(3000, () => {})
        